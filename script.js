/**
 * Variável com a largura da div tarefa
 * Variable with width of task div
 */
let tarefaWidth = 200

/**
 * Variavel para verificar se exibe ou não a div tarefa
 * Variable to verify show or hide task div
 */
let tarefaShow = false

/**
 * Variável com a ação do redimensionamento
 * Variable with action to resize
 */
let interval

/**
 * Variável para o tamanho da div tarefa com animação
 * Variable to width task div with animation
 */
let width = 0

/**
 * Elemento do div conteudo
 * Div content element
 */
let divConteudo = document.getElementById('div_conteudo')

/**
 * Elemento do tamanho do conteudo
 * Width content element
 */
let divConteudoValue = document.getElementById('div_conteudo_value')

/**
 * Elemento do div Tarefa
 * Div task element
 */
let divTarefa = document.getElementById('div_tarefa')

/**
 * Elemento do tamanho de tarefa
 * Width task element
 */
let divTarefaValue = document.getElementById('div_tarefa_value')

/**
 * Função para realizar a animação e setar a variável toggle
 * Function to realize action and set toggle variable 
 */
function toggle () {
    clearInterval(interval)
    interval = setInterval(resize, 1)
    tarefaShow = !tarefaShow
}

/**
 * Função para redimensionar as divs e setar os valores de tamanho na tela
 * Function to resize the divs and set width values on screen
 */
function resize () {
    (tarefaShow) ? increase() : decrease()
    divConteudoValue.innerHTML = divConteudo.offsetWidth
    divTarefaValue.innerHTML = divTarefa.offsetWidth
}

/**
 * Função para aumentar o tamanho da tarefa e reduzir o tamanho od conteudo
 * Function to increment task width and decrease content width
 */
function increase () {
    if (width === tarefaWidth) {
        clearInterval(interval)
    } else {
        divTarefa.style.display = 'block'
        width+=2
        divTarefa.style.width = `${width}px`
        divConteudo.style.width = `${divConteudo.offsetWidth - 2}px`
    }
}

/**
 * Função para reduzir o tamanho da tarefa e aumentar o tamanho od conteudo
 * Function to decrease task width and increment content width
 */
function decrease () {
    if (width === 0) {
        clearInterval(interval)
        divTarefa.style.display = 'none'
    } else {
        width-=2
        divTarefa.style.width = `${width}px`
        divConteudo.style.width = `${divConteudo.offsetWidth + 2}px`
    }
}