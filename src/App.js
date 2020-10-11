import React, { Component } from "react";
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Header from './react-components/Header'
import Section from './react-components/Section'
import './style/app.sass';
import './style/section.sass';

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

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Section />
            </div>
        );
    }
}
export default App;