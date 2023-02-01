const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(App, null));

function App() {
  const firstRef = React.useRef(null);
  const secondRef = React.useRef(null);
  const thirdRef = React.useRef(null);
  const fourthRef = React.useRef(null);
  const fifthRef = React.useRef(null);
  const sixthRef = React.useRef(null);

  const [first, setFirst] = React.useState('');
  const [firstCondition, setFirstCondition] = React.useState('');

  const [second, setSecond] = React.useState('');
  const [secondCondition, setSecondCondition] = React.useState('');

  const [third, setThird] = React.useState('');
  const [thirdCondition, setThirdCondition] = React.useState('');

  const [fourth, setFourth] = React.useState('');
  const [fourthCondition, setFourthCondition] = React.useState('');

  const [fifth, setFifth] = React.useState('');
  const [fifthCondition, setFifthCondition] = React.useState('');

  const [sixth, setSixth] = React.useState('');
  const [sixthCondition, setSixthCondition] = React.useState('');

  const inputs = [
    firstRef.current,
    secondRef.current,
    thirdRef.current,
    fourthRef.current,
    fifthRef.current,
    sixthRef.current,
  ];

  function controlFocusPrevElem(n) {
    for (let i = n - 1; i >= 0; i--) {
      if (inputs[i - 1] && !inputs[i - 1].disabled) {
        inputs[i - 1] && inputs[i - 1].focus();
        break;
      }
    }
  }

  function controlFocusNextElem(n) {
    for (let i = n; i < inputs.length; i++) {
      if (inputs[i] && !inputs[i].disabled) {
        inputs[i] && inputs[i].focus();
        break;
      }
    }
  }

  React.useEffect(() => {
    !sixth && fifthRef.current.focus();
  }, [sixth]);

  React.useEffect(() => {
    if (fifth) {
      controlFocusNextElem(5);
    } else {
      fifthRef.current.focus();
      controlFocusPrevElem(5);
    }
  }, [fifth]);

  React.useEffect(() => {
    if (fourth) {
      controlFocusNextElem(4);
    } else {
      fourthRef.current.focus();
      controlFocusPrevElem(4);
    }
  }, [fourth]);

  React.useEffect(() => {
    if (third) {
      controlFocusNextElem(3);
    } else {
      thirdRef.current.focus();
      controlFocusPrevElem(3);
    }
  }, [third]);

  React.useEffect(() => {
    if (second) {
      controlFocusNextElem(2);
    } else {
      secondRef.current.focus();
      controlFocusPrevElem(2);
    }
  }, [second]);

  React.useEffect(() => {
    if (first) {
      controlFocusNextElem(1);
    } else {
      firstRef.current.focus();
    }
  }, [first]);

  React.useEffect(() => {
    firstRef.current.focus();
  }, []);

  if (first && second && third && fourth && fifth && sixth) {
    if (sixth !== '6') {
      setSixth('');
      setSixthCondition('invalid');
    } else {
      sixthRef.current.disabled = true;
    }

    if (fifth !== '5') {
      setFifth('');
      setFifthCondition('invalid');
    } else {
      fifthRef.current.disabled = true;
    }

    if (fourth !== '4') {
      setFourth('');
      setFourthCondition('invalid');
    } else {
      fourthRef.current.disabled = true;
    }

    if (third !== '3') {
      setThird('');
      setThirdCondition('invalid');
    } else {
      thirdRef.current.disabled = true;
    }

    if (second !== '2') {
      setSecond('');
      setSecondCondition('invalid');
    } else {
      secondRef.current.disabled = true;
    }

    if (first !== '1') {
      setFirst('');
      setFirstCondition('invalid');
    } else {
      firstRef.current.disabled = true;
    }
  }
  return React.createElement(
    'section',
    null,
    React.createElement(
      'form',
      { className: 'form' },
      React.createElement('input', {
        ref: firstRef,
        className:
          !first && firstCondition === 'invalid' ? 'input invalid' : 'input',
        type: 'text',
        value: first,
        name: 'first',
        maxLength: '1',
        onChange: (e) => setFirst(e.target.value.replace(/\D/, '')),
      }),
      React.createElement('input', {
        ref: secondRef,
        className:
          !second && secondCondition === 'invalid' ? 'input invalid' : 'input',
        type: 'text',
        maxLength: '1',
        value: second,
        onChange: (e) => setSecond(e.target.value.replace(/\D/, '')),
      }),
      React.createElement('input', {
        ref: thirdRef,
        className:
          !third && thirdCondition === 'invalid' ? 'input invalid' : 'input',
        type: 'text',
        maxLength: '1',
        value: third,
        onChange: (e) => setThird(e.target.value.replace(/\D/, '')),
      }),
      React.createElement('input', {
        ref: fourthRef,
        className:
          !fourth && fourthCondition === 'invalid' ? 'input invalid' : 'input',
        type: 'text',
        maxLength: '1',
        value: fourth,
        onChange: (e) => setFourth(e.target.value.replace(/\D/, '')),
      }),
      React.createElement('input', {
        ref: fifthRef,
        className:
          !fifth && fifthCondition === 'invalid' ? 'input invalid' : 'input',
        type: 'text',
        maxLength: '1',
        value: fifth,
        onChange: (e) => setFifth(e.target.value.replace(/\D/, '')),
      }),
      React.createElement('input', {
        ref: sixthRef,
        className:
          !sixth && sixthCondition === 'invalid' ? 'input invalid' : 'input',
        type: 'text',
        value: sixth,
        maxLength: '1',
        onChange: (e) => setSixth(e.target.value.replace(/\D/, '')),
      }),
    ),
  );
}
