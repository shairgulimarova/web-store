import React from 'react'
import {useForm} from 'react-hook-form'
import {Link,NavLink} from "react-router-dom"; 
import './register.scss'

function Register() {

  const {register, 
    formState:{errors, isValid},
    handleSubmit,
    reset, watch
  } = useForm({
    mode:'onBlur'
  });

  const password = watch('password')

  const onSubmit = (data) =>{
    alert(JSON.stringify(data));
    reset();
  }





  return (
    <section className='register'>
      <div className="register__container">
        <h4>Регистрация</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Имя пользователя
      <input type='text' placeholder='Shaiyrgul Imarova'  
                {...register('name', {
                  required: "Заполните имя пользователя!",
                  minLength:{
                    value:3,
                    message:"Минимум 3 символа"
                  },
                })}/>
      </label>
      <div className="register__error">
                {errors?.name && <p>{errors?.name?.message || "Error!"} </p>}
              </div>

      <label>Почта
      <input type='text' placeholder='test@test.com' 
      {...register('email', {
        required: "Заполните поле для почты!",
        pattern:{
          value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
          message:"Введите почту корректно!"
        }
      })}/>
      </label>
      <div className="register__error">
              {errors?.email && <p>{errors?.email?.message || "Error!" }</p>}
              </div>  

      <label>Пароль
      <input type='password' placeholder='Пароль'
       {...register('password', {
        required: "Заполните поле для пароля!",
        minLength:{
          value: 8,
          message:"Минимум 8 символов"
        }
      })}/>
      </label>
      <div className="register__error">
               {errors?.password && <p>{errors?.password?.message || "Error!" }</p>}
              </div>

      <label>Подтверждение пароля
      <input type='password' placeholder='Подтверждение пароля'
       {...register('passwordConfirmation', {
        required: "Подтвердите пароль!",
        validate: (value) =>
        value === password || 'Пароли должны совпадать!'
      })}/>
      </label>
      <div className="register__error">
              {errors?.passwordConfirmation && <p>{errors?.passwordConfirmation?.message || "Error!" }</p>} 
              </div>

      <input type='submit' disabled={!isValid}/>
      </form>


      <div className="register__signIn">        
      <NavLink to='/login' key='login' className='register__signin loginLink'>Есть регистрация?Войти</NavLink>
      </div>
      </div>     

    </section>
  )
}

export default Register