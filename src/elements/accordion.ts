import { Details } from './details'

export class Accordion {
  closeAllOnExpandEnabled = true;

  constructor(public detailsList: Details[]) {
    
    this.detailsList.forEach((details) => {
      details.el.addEventListener('expand', ({ detail }: CustomEvent<string>) => {
        this.detailsList.forEach((details) => {
          if (this.closeAllOnExpandEnabled && details.el.id !== detail) {
            details.close()
          }
        })
      })
    })
  }

  enableCloseAllOnExpand() {
    this.closeAllOnExpandEnabled = true;
  }

  disableCloseAllOnExpand() {
    this.closeAllOnExpandEnabled = false;
  }

  openAll() {
    this.detailsList.forEach((details) => details.open())
  }

  closeAll() {
    this.detailsList.forEach((details) => details.close())
  }
}
