import { px } from '../utilities/px'

let ID = 0;

export class Details {
  summary: HTMLElement | null

  content: HTMLElement | null

  animation: Animation | null

  isClosing: boolean

  isExpanding: boolean

  constructor(public el: HTMLDetailsElement) {
    const index = ID++
    this.el.dataset.id = `${index}`
    this.el.id = `details-${index}`

    // Armazena o elemento <summary>
    this.summary = el.querySelector('.details__summary')

    // Armazene o elemento <div class="details__content">
    this.content = el.querySelector('.details__content')

    // Armazena o objeto de animação (para que possamos cancelá-lo se necessário)
    this.animation = null

    // Armazena se o elemento está fechando
    this.isClosing = false

    // Armazena se o elemento está se expandindo
    this.isExpanding = false

    // Detecta cliques do usuário no elemento de resumo
    if (this.summary) {
      this.summary.onclick = (e) => this.onClick(e)
    }
  }

  onClick(e: MouseEvent) {
    // Interrompe o comportamento padrão do navegador
    e.preventDefault()

    // Adicione um estouro em <detalhes> para evitar o estouro de conteúdo
    this.el.style.overflow = 'hidden'

    // Verifique se o elemento está sendo fechado ou já está fechado
    if (this.isClosing || !this.el.open) {
      this.open()

      // Verifique se o elemento está sendo aberto ou já está aberto
    } else if (this.isExpanding || this.el.open) {
      this.close()
    }
  }

  close() {
    // Defina o elemento como "sendo fechado"
    this.isClosing = true

    // Armazena a altura atual do elemento
    const startHeight = px(this.el.offsetHeight)

    // Calcule a altura do resumo
    let endHeight = this.summary ? px(this.summary?.offsetHeight) : px(75)

    // Se já houver uma animação em execução
    if (this.animation) {
      // Cancela a animação atual
      this.animation.cancel()
    }

    // Iniciar uma animação WAAPI
    this.animation = this.el.animate(
      {
        // Defina os keyframes de startHeight a endHeight
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: 'ease-out',
      }
    )

    // Quando a animação estiver concluída, chame onAnimationFinish ()
    this.animation.onfinish = () => this.onAnimationFinish(false)

    // Se a animação for cancelada, a variável isClosing é definida como falsa
    this.animation.oncancel = () => (this.isClosing = false)
  }

  open() {
    // Aplicar uma altura fixa no elemento
    this.el.style.height = px(this.el.offsetHeight)

    // Força o atributo [abrir] no elemento de detalhes
    this.el.open = true

    this.el.dispatchEvent(new CustomEvent('expand', { detail: this.el.id }));
    
    // Aguarde o próximo quadro para chamar a função de expansão
    requestAnimationFrame(() => this.expand())
  }

  expand() {
    // Defina o elemento como "em expansão"
    this.isExpanding = true
    
    // Obtenha a altura fixa atual do elemento
    const startHeight = px(this.el.offsetHeight)

    // Calcule a altura aberta do elemento (altura do resumo + altura do conteúdo)

    const endHeight =
      this.summary && this.content
        ? px(this.summary.offsetHeight + this.content.offsetHeight)
        : px(75)

    // Se já houver uma animação em execução
    if (this.animation) {
      // Cancela a animação atual
      this.animation.cancel()
    }

    // Iniciar uma animação WAAPI
    this.animation = this.el.animate(
      {
        // Defina os quadros-chave de startHeight a endHeight
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: 'ease-out',
      }
    )

    // Quando a animação estiver concluída, chame onAnimationFinish ()
    this.animation.onfinish = () => this.onAnimationFinish(true)

    // Se a animação for cancelada, a variável isExpanding é definida como falsa
    this.animation.oncancel = () => (this.isExpanding = false)
  }

  onAnimationFinish(open: boolean) {
    // Defina o atributo aberto com base no parâmetro
    this.el.open = open

    // Limpa a animação armazenada
    this.animation = null

    // Redefinir isClosing & isExpanding
    this.isClosing = false

    this.isExpanding = false

    // Remova o estouro oculto e a altura fixa
    this.el.style.height = this.el.style.overflow = ''
  }
}

declare global {
  interface HTMLElementEventMap {
    'expand': CustomEvent<string>;
  }
}