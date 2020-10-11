import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import '../style/section.sass'

const SectionButton = styled(Button)({
    marginTop: '32px',
    backgroundColor: '#3F51B5',
    borderRadius: '5px',
    color: 'white',
    height: '48px',
    width: '170px',
    padding: '0 30px',
    textTransform: 'capitalize',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease-out'
});

class Section extends Component {
    render() {
        return (
            <section>
                <div className='section'>
                    <div className='section__text'>
                        <h1>Иструмент мониторинга для трейдера, которому доверяют</h1>
                        <p>Создайте портфолио со своими фактическими успехами —<br /> повысьте доверие у заинтересованных людей.</p>
                        <SectionButton className='button'>Начать работу</SectionButton>
                    </div>
                    <div className='section__image image'>
                        <img src="../image/Illustration1.svg" alt="" />
                    </div>
                </div>
                <div className='section section-2'>
                    <div className='section-2__image image'>
                        <img src="../image/Illustration2.svg" alt="" />
                    </div>
                    <div className='section__text section-2__text'>
                        <h1>Проверенные результаты</h1>
                        <p>Объективные и сухие цифры подойдут не только для мониторинга <br /> своих результатов, но и для того, чтобы вызвать доверие <br /> у инвесторов или своей публики.</p>
                    </div>
                </div>
            </section>
        );
    };
};

export default Section;