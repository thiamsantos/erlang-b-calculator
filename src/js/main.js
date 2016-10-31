import blockProbality from './math/block-probality'
import offeredTraffic from './math/offered-traffic'
import channelsNumber from './math/channels-number'
import {percent} from './math/utils'

const $ = document.querySelector.bind(document)

const getUnknownValue = () => $('.unknown-values:checked').value

const nodes = {
  radio: {
    bp: $('#bp-radio'),
    ot: $('#ot-radio'),
    cn: $('#cn-radio')
  },
  input: {
    bp: $('#bp-input'),
    ot: $('#ot-input'),
    cn: $('#cn-input')
  },
  textField: {
    bp: $('.js-text-field-bp'),
    ot: $('.js-text-field-ot'),
    cn: $('.js-text-field-cn')
  },
  result: {
    bp: $('.js-result-bp'),
    ot: $('.js-result-ot'),
    cn: $('.js-result-cn')
  },
  defaultValues: {
    bp: '1',
    ot: '1',
    cn: '1'
  }
}
let disabled = getUnknownValue()

const disableInput = () => {
  nodes.input[disabled].removeAttribute('disabled')
  nodes.textField[disabled].classList.remove('is-disabled')

  disabled = getUnknownValue()

  const input = nodes.input[disabled]
  input.disabled = 'true'
  input.value = nodes.defaultValues[disabled]
  nodes.textField[disabled].classList.add('is-disabled')
}

const calculate = () => {
  const unknown = getUnknownValue()
  const {bp: bpInput, ot: otInput, cn: cnInput} = nodes.input
  const {bp: bpResult, ot: otResult, cn: cnResult} = nodes.result
  let values = {
    bp: 0,
    ot: 0,
    cn: 0
  }

  if (unknown === 'bp') {
    values.ot = otInput.value
    values.cn = cnInput.value
    values.bp = blockProbality(values.ot, values.cn)
  } else if (unknown === 'ot') {
    values = offeredTraffic(percent(bpInput.value), cnInput.value)
  } else if (unknown === 'cn') {
    values = channelsNumber(percent(bpInput.value), otInput.value)
  }
  console.log(JSON.stringify(values, null, 2))
  bpResult.textContent = values.bp
  otResult.textContent = values.ot
  cnResult.textContent = values.cn
}

Object.keys(nodes.input).forEach(key => {
  nodes.input[key].addEventListener('input', calculate)
})
Object.keys(nodes.radio).forEach(key => {
  nodes.radio[key].addEventListener('click', disableInput)
})
