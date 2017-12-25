import $ from 'jquery'
import common from './common'

common()
$('body').append('<div>sub2</div>')
export default function () {
  console.log('sub2');
}