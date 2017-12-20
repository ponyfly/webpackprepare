import 'babel-polyfill'
import subB from './sub2'
import $ from 'jquery'
import subA from './sub'

import '../css/main.css'

const header = document.getElementById('header')

header.style.cssText = 'background-color: yellowgreen'

const promise = new Promise((resolve, reject) => {
  resolve()
})

promise.then(() => console.log(123456))

subB()
$('#section_1').html(subA)