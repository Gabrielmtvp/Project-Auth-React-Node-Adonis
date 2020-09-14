import React from 'react';

export default () => {
    return (
        <div className="container">
            <h1 className="titulo" >Acessar o Sistema</h1>
            <form>
                <div>
                    <input type="text" name="txt_user" id="txt_user" placeholder="Usuário" className="input-txt-login" />
                </div>
                <div>
                    <input type="text" name="txt_pass" id="txt_pass" placeholder="Senha" className="input-txt-login" />
                </div>
                <input type="submit" className="input-submit-login"></input>
            </form>
        </div>
    )
}
    
