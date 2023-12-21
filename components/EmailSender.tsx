"use client"

import React from 'react'
import { Resend } from 'resend';

const resend = new Resend('re_db8fmQ1p_HmQiWrgp2S7qJsK6YaqoMFB9');

function EmailSender() {
    
    const onSendHandler =()=>{
        resend.emails.send({
            from: 'tinyu@mm.iconic.inc',
            to: 'tinyu@mm.iconic.inc',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
          });
    }

  return (
        <form action={async()=>{
            await onSendHandler()
        }}>

        <button type='submit'>send email</button>
        </form>
  )
}

export default EmailSender