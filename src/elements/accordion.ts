import { Details } from './details'

export class Accordion {
  closeAllOnExpandEnabled = true

  constructor(public detailsList: Details[]) {
    this.detailsList.forEach((details) => {
      details.el.addEventListener('expand', ({ detail }) => {
        this.detailsList.forEach((details) => {
          const config: ScrollIntoViewOptions = { behavior: 'smooth', block: 'start' }
          if (this.closeAllOnExpandEnabled) {
            
            if (details.el.id !== detail) {
              details.close()
            }

            if (details.el.id === detail) {
              setTimeout(() => details.el.scrollIntoView(config), 400);
            }
          }
          
        })
      })
    })
  }

  enableCloseAllOnExpand() {
    this.closeAllOnExpandEnabled = true
  }

  disableCloseAllOnExpand() {
    this.closeAllOnExpandEnabled = false
  }

  openAll() {
    this.detailsList.forEach((details) => details.open())
  }

  closeAll() {
    this.detailsList.forEach((details) => details.close())
  }
}
