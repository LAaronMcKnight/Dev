import { useState } from 'react'

const Ask = ({ onAsk }) => {

  const [name, setName] = useState('')
  const [question, setQuestion] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!name || !question) {
      alert('Please add your Name and a Question!')
      return
    }

    onAsk({ name, question })

    setName('')
    setQuestion('')
  }

  return (
    <form className="ask-form" onSubmit={onSubmit}>
      <div className="ask-input">
      <input type="text" placeholder="Name" value={name} onChange={(e) => 
        setName(e.target.value)} />
      </div>
      <div className="ask-input">
      <input type="text" placeholder="Question" value={question} onChange={(e) => 
        setQuestion(e.target.value)} />
      </div>
      <input type='submit' value='Save Question' className='submitBtn' />
    </form>
  )
}

export default Ask