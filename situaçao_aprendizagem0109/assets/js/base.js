function gerar(){
    let res= document.getElementById('res')
    let ab = Number(document.getElementById('ab').value)
    let ap = Number(document.getElementById('ap').value)
    let tot = (ab * ap)/3                 
    console.log(tot)
    res.innerHTML = 'O volume de uma piramide é = ' + tot
}
let res7 = document.getElementById('res7')
let res2 = document.getElementById('res2')

let valor_array = []

function gerar2(){
    let res7 = document.getElementById('res7')
    valor_array = []
    let valor_aleatorio = 0
    for(i=0;i<10;i++){
        valor_aleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1)
        valor_array.push(valor_aleatorio)
    }
    console.log(valor_array)
    res7.innerHTML = `Os valores do Array são = ${valor_array}`
}

function encontrar_maior(){
    maior = 0
    for(i=0;i<valor_array.length;i++){
        if(valor_array[i] > maior){
            maior = valor_array[i]
        }
    }
    res2.innerHTML = 'O maior número entre eles é = ' + maior 
}

let res_4 = document.getElementById('res_4')
let res_2 = document.getElementById('res_2')

let num_array_original = []
let num_array = []

function inserir(){
    res_4.innerHTML = ''
    let num1 = Number(document.getElementById('num1').value)
    num_array.push(num1)
    console.log(num_array)
    res_4.innerHTML = 'Vetor = [ ' + num_array + ' ]'
} 

function ordenar(){
    res_2.innerHTML = ''
    let valor_atual = 0
    let contador = 0

    console.log('*****************')
    console.log(num_array)
    console.log('*****************')

    for(j=num_array.length-1;j>0;j--){
        contador = contador + 1

        for(i=0;i<num_array.length-1;i++){
            contador +=1

            if(num_array[i]>num_array[i+1]){
                valor_atual = num_array[i]
                num_array[i] = num_array[i+1]
                num_array[i+1] = valor_atual

                console.log('------------------')
                console.log(num_array)
                console.log('------------------')
            }            
        }
    }
    console.log('==================')
    console.log(num_array)
    console.log('==================')

    console.log('O numero de vezes é = ' + contador)

    res_2.innerHTML = 'Vetor = [ ' + num_array + ' ]'
    
}
let res_5 = document.getElementById('res_5')
let res_6 = document.getElementById('res_6')

let num_array_original1 = []
let num_array1 = []

function inserir2(){
    res_5.innerHTML = ''
    let num2 = Number(document.getElementById('num2').value)
    num_array1.push(num2)
    console.log(num_array1)
    res_5.innerHTML = 'Vetor = [ ' + num_array1 + ' ]'
} 

function ordenar2(){
    res_6.innerHTML = ''
    let valor_atual1 = 0
    let contador = 0

    console.log('*****************')
    console.log(num_array1)
    console.log('*****************')

    for(i=0;i<num_array1.length;i++){
        contador += 1
        let j = i - 1
        valor_atual1 = num_array1[i]

        while(j>=0 && valor_atual1 < num_array1[j]){
            contador++

            num_array1[j+1]=num_array1[j]

            console.log('------------------')
            console.log(num_array1)
            console.log('------------------')

            j--
        }
        num_array1[j+1] = valor_atual1
    }
    console.log('==================')
    console.log(num_array1)
    console.log('==================')

    console.log('O numero de vezes é = ' + contador)

    res_6.innerHTML = 'Vetor = [ ' + num_array1 + ' ]'

}
