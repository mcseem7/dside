{this.state.result ?
    <div id="form-result">
        <h3 id="thanks"><Translate>Thank you! Application successfully submitted!</Translate></h3>
      </div> :  <div id="form-itself">
        <h3><Translate>Leave your phone number</Translate></h3>
          <p><Translate>And you will receive a free consultation on the question that interests you. Usually we call back
            within 30 seconds.
          </Translate></p>
          <form  onSubmit={
              (event) => {
              event.preventDefault();
              this.props.getSubmitForm(this.nameRef.current.value, this.phoneRef.current.value)
            }} id="request-form" className='request-form_order' method="post" autocomplete="off">


            <div className='holder__wrapper' >
              <label for="id_subject">Имя:</label>
              <div className="holder__poppup holder__poppup-name"><Translate>Name</Translate></div>
              <input  ref={this.nameRef}  id="id_name" maxlength="50" minlength="2" name="name" required="required" type="text" />
            </div>
            <div className='holder__wrapper'>
              <label for="id_sender">Телефон:</label>
              <div className="holder__poppup holder__poppup-phone"><Translate>Phone number (With country code)</Translate></div>
              <InputMask mask={
  this.props.language === "ru"
                        ? "+7 99-999-999-99"
                        : "+48 999-999-999"
} pattern="^\+[1-9]{1}[0-9]{3,14}$"  ref={this.phoneRef} id="id_phone" maxlength="50" minlength="6" name="phone" required="required" type="tel" />
            </div>
            <button className="button14" type='submit' ><Translate>Send</Translate><img src={arrow} alt="" /></button>
          </form>
        </div>
    }