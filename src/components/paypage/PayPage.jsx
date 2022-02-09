import React from 'react';
import styles from './PayPage.module.css'
import beeline from '../icons/beeline.png'
import mts from '../icons/mts.png'
import tele2 from '../icons/tele2.png'
import yota from '../icons/yota.png'
import megafon from '../icons/megafon.png'
import InputMask from "react-input-mask";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import cN from 'classnames';
import Button from '@mui/material/Button';

const PayPage = ({index}) => {
    let navigate = useNavigate();
    const [result, setResult] = React.useState(0)
    const { register, handleSubmit, control, Errors, formState: { errors, } } = useForm({
        mode: "onSubmit"
    });
    let operators = [beeline, megafon, mts, tele2, yota]

    function onSubmit(data) {
        console.log(data);
        getResource()
      }


    const getResource = async() => {

    let URL = '';
    let rand = Math.round(1 - 0.5 + Math.random() * (2 - 1 + 1));
    rand === 1 ? URL = "https://api.spacexdata.com/v4/launches/latest" : URL = ":)";
    try {
        const res = await fetch(URL);
        const data = await res.json();
        setResult(1)
        return data
        
    } 
    catch (error) {
        setResult(2)
        return false;
    }
    } 

    console.log(result);


    if (result === 1) {
        setTimeout(() => {
            navigate("../", { replace: true })
        }, 1000);
    }


    return (
        <div className={styles.pay__container}>
            <div className={styles.operator}>
                <img src={operators[index]} alt="" />
            </div>
            <div>
                <form className={styles.form__block} onSubmit={handleSubmit(onSubmit)}>
                    <div><p>Введите сумму от 1 до 1000 рублей:</p></div>
                    <div>
                        <input
                            type="number"
                            name="summ"
                            placeholder=""
                            {...register("summ", { 
                                required: true, 
                                min: 1, 
                                max: 1000
                            })}
                            defaultValue=""
                        />
                    </div>
                    <div style={{ color: 'red', height: 40 }}>{errors?.summ && <p>мин 1 и макс 1000 руб!</p>}</div>
                    <div><p>Введите номер телефона:</p></div>
                    <div className={styles.phone__input}>
                        <Controller
                            control={control}
                            name="phone"
                            render={({ field: { onChange, onBlur, ref } }) => (
                            <InputMask
                                mask="+7(999)9999999"
                                onBlur={onBlur}
                                onChange={onChange}
                                inputRef={ref}
                            />
                            )}
                        />
                    </div >
                    <div className={styles.button__block}>
                        <div>
                            <Button onClick={() => {navigate("../", { replace: true })}} type="submit" variant="contained">Go back</Button>
                        </div>
                        <div>
                            <Button type="submit" variant="contained">Pay</Button>
                        </div>

                    </div>

                </form>
            </div>
            <div>
                { result === 2 && (
                    <div className={cN(styles.error__pay, styles.message__block)}>
                        <p>Оплата не прошла!</p>
                    </div>
                )}
                { result === 1 && (
                    <div className={cN(styles.succes__pay, styles.message__block)}>
                        <p>Оплата прошла успешно!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PayPage;