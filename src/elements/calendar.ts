export interface DayDataSet extends DOMStringMap {
  date: string
  month: string
  year: string
  monthName: string
}

interface DayCell extends HTMLTableCellElement {
  dataset: DayDataSet
}

type DayFnMapper = <T extends DayCell>(cell: T) => void

export class CalendarElement extends HTMLElement {
  today = new Date()
  currentMonth = this.today.getMonth()
  currentYear = this.today.getFullYear()

  monthAndYear!: HTMLHeadingElement

  buttonPrevious!: HTMLButtonElement
  buttonNext!: HTMLButtonElement

  selectYear!: HTMLSelectElement
  selectMonth!: HTMLSelectElement

  calendar!: HTMLTableElement

  selectableDays!: NodeListOf<DayCell>

  currentDayData!: DayDataSet

  dayFnMapper!: DayFnMapper

  months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]
  days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<link rel="stylesheet" href="styles/button.css" />
    <style>   
      :host {
        display: block;
        width: calc(100% - 40px);

        margin: 20px;

        --dark-primary-color: #512da8;
        --default-primary-color: #673ab7;
        --light-primary-color: #d1c4e9;
        --text-primary-color: #ffffff;
        --accent-color: #00bcd4;
        --primary-text-color: #212121;
        --secondary-text-color: #757575;
        --divider-color: #bdbdbd;
        --warn-color: #eb3535;
        --default-font-family: "Fira Sans", sans-serif;
        --default-container-width: 1200px;
        --default-element-margin: 6px;
        --default-element-padding: 8px;
        --default-block-padding: 10px;
        --default-block-margin: 16px;
        --default-border-width: 2px;
        --border-radius-xs: 2px;
        --border-radius-sm: 4px;
        --border-radius-md: 8px;
        --border-radius-lg: 12px;
        --breakpoint-mobile: 360px;
      }

      button {
        padding: var(--default-element-padding)
          calc(var(--default-element-padding) * 2);
        background-color: var(--default-primary-color);
        border-radius: var(--border-radius-sm);
        color: var(--text-primary-color);
        border: 0;
      }
      button:disabled {
        background-color: var(--light-primary-color);
      }
      button.accent {
        background-color: var(--accent-color);
      }

      .button-container-calendar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .button-container-calendar button {
        cursor: pointer;
      }

      #calendar {
        width: 100%;
        height: 400px;
      }

      #month-and-year {
        margin: 0;
      }

      #calendar thead td {
        font-weight: bold;
      }

      #calendar td {
        text-align: center;
        border-radius: var(--border-radius-sm);
        padding: var(--default-element-padding);
      }

      #calendar td.date-picker:hover {
        cursor: pointer;
        background-color: var(--light-primary-color);
      }

      #calendar td.selected {
        background-color: var(--dark-primary-color);
        color: var(--text-primary-color);
      }
    </style>
    
    
    <div class="button-container-calendar">
      <button id="previous">&#8249;</button>
      <h3 id="month-and-year"></h3>
      <button id="next">&#8250;</button>
    </div>
  
    <table class="table-calendar" id="calendar">
      <thead id="thead-month"></thead>
      <tbody id="calendar-body"></tbody>
    </table>
  
    <div class="footer-container-calendar">
      <label for="month">Ir para: </label>
      <select id="month"></select>
      <select id="year"></select>
    </div>`

    shadow.appendChild(template.content.cloneNode(true))

    this.monthAndYear = shadow.querySelector(
      '#month-and-year'
    ) as HTMLHeadingElement

    this.buttonPrevious = shadow.querySelector('#previous') as HTMLButtonElement
    this.buttonNext = shadow.querySelector('#next') as HTMLButtonElement

    this.selectYear = shadow.querySelector('#year') as HTMLSelectElement
    this.selectMonth = shadow.querySelector('#month') as HTMLSelectElement

    this.calendar = shadow.querySelector('#calendar') as HTMLTableElement

    this.months.forEach((m, i) => {
      this.selectMonth.add(new Option(m, `${i}`))
    })
    this.generateYearRange(1970, 2030)

    this.buttonPrevious.onclick = this.previous()
    this.buttonNext.onclick = this.next()

    this.selectMonth.onchange = this.jump()
    this.selectYear.onchange = this.jump()

    const thead = this.calendar.createTHead()
    const theadRow = thead.insertRow()

    this.days.forEach((value, index) => {
      const th = theadRow.insertCell()
      th.dataset.days = index.toString()
      th.textContent = value
    })

    this.showCalendar(this.currentMonth, this.currentYear)

    this.dayFnMapper = (day) => {
      const detail = day.dataset
      const event = new CustomEvent('selected', { detail })
      this.dispatchEvent(event)
    }
  }

  previous() {
    return () => {
      this.currentYear =
        this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear
      this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1

      this.showCalendar(this.currentMonth, this.currentYear)
    }
  }

  next() {
    return () => {
      this.currentYear =
        this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear
      this.currentMonth = (this.currentMonth + 1) % 12

      this.showCalendar(this.currentMonth, this.currentYear)
    }
  }

  jump() {
    return () => {
      this.currentYear = +this.selectYear.value
      this.currentMonth = +this.selectMonth.value

      this.showCalendar(this.currentMonth, this.currentYear)
    }
  }

  private attachListeners() {
    const tbody = this.calendar.querySelector('tbody')
    this.selectableDays = tbody!.querySelectorAll('td.date-picker')
    this.selectableDays.forEach((day) => {
      day.addEventListener('click', () => this.dayFnMapper(day))
    })
  }

  private detachListeners() {
    if (this.selectableDays) {
      this.selectableDays.forEach((day) => {
        day.removeEventListener('click', () => this.dayFnMapper(day))
      })
    }
  }

  private showCalendar(month: number, year: number) {
    const firstDay = new Date(year, month).getDay()

    this.detachListeners()

    const tbody = this.calendar.querySelector('tbody')
    tbody!.innerHTML = ''

    this.monthAndYear.textContent = `${this.months[month]} ${year}`
    this.selectYear.value = `${year}`
    this.selectMonth.value = `${month}`

    let date = 1
    for (let calendarRow = 0; calendarRow < 6; calendarRow++) {
      const row = tbody!.insertRow()

      for (let calendarCol = 0; calendarCol < 7; calendarCol++) {
        if (calendarRow === 0 && calendarCol < firstDay) {
          row.insertCell()
        } else if (date > this.daysInMonth(month, year)) {
          break
        } else {
          const cell = row.insertCell()

          cell.dataset.date = `${date}`
          cell.dataset.month = `${month + 1}`
          cell.dataset.year = `${year}`
          cell.dataset.monthName = `${this.months[month]}`
          cell.textContent = `${date}`

          cell.classList.add('date-picker')

          if (
            date === this.today.getDate() &&
            year === this.today.getFullYear() &&
            month === this.today.getMonth()
          ) {
            cell.classList.add('date-picker', 'selected')
          }

          date++
        }
      }
    }

    this.attachListeners()
  }

  private daysInMonth(iMonth: number, iYear: number) {
    return 32 - new Date(iYear, iMonth, 32).getDate()
  }

  private generateYearRange(start: number, end: number) {
    for (let year = start; year <= end; year++) {
      this.selectYear.add(new Option(`${year}`, `${year}`))
    }
  }
}

customElements.define('mentoring-calendar', CalendarElement)
