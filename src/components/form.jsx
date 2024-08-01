import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScissors } from '@fortawesome/free-solid-svg-icons'


const FormComponent = () => {
  return (
    <div className='formComponent'>
      <h1 className='header'>Scissor <FontAwesomeIcon icon={faScissors} />--/...</h1>
      <h4 className='sub-header'> Chop long links into tiny, shareable bites!</h4>
      <p>Scissor is your link-shortening sidekick. Paste any long URL, and we'll generate a short, clean link for easy sharing across all your platforms</p>
      <form>
        <input type="url" />
        <button type="submit">Shorten</button>
      </form>
    </div>
  )
}

export default FormComponent