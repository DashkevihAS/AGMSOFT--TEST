const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

function App() {
  const firstRef = React.useRef(null);
  const secondRef = React.useRef(null);
  const thirdRef = React.useRef(null);
  const fourthRef = React.useRef(null);
  const fifthRef = React.useRef(null);
  const sixthRef = React.useRef(null);

  const [value, setValue] = React.useState(['', '', '', '', '', '']);
  const [condition, setCondition] = React.useState(['', '', '', '', '', '']);

  // const [first, setFirst] = React.useState('');
  // const [firstCondition, setFirstCondition] = React.useState('');

  // const [second, setSecond] = React.useState('');
  // const [secondCondition, setSecondCondition] = React.useState('');

  // const [third, setThird] = React.useState('');
  // const [thirdCondition, setThirdCondition] = React.useState('');

  // const [fourth, setFourth] = React.useState('');
  // const [fourthCondition, setFourthCondition] = React.useState('');

  // const [fifth, setFifth] = React.useState('');
  // const [fifthCondition, setFifthCondition] = React.useState('');

  // const [sixth, setSixth] = React.useState('');
  // const [sixthCondition, setSixthCondition] = React.useState('');

  const inputs = [
    firstRef.current,
    secondRef.current,
    thirdRef.current,
    fourthRef.current,
    fifthRef.current,
    sixthRef.current,
  ];

  // function controlFocusNextElem(n) {
  //   for (let i = n; i < inputs.length; i++) {
  //     if (!inputs[i]?.disabled) {
  //       inputs[i]?.focus();
  //       break;
  //     }
  //   }
  // }
  console.log('render');

  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        console.log(132);
        for (let i = inputs.length; i >= 0; i--) {
          if (inputs[i - 1]?.value && !inputs[i - 1]?.disabled) {
            inputs[i - 1]?.focus();
            break;
          }
        }
      }
    });
  });

  // React.useEffect(() => {
  //   if (value) {
  //     controlFocusNextElem(5);
  //   } else {
  //     fifthRef.current.focus();
  //   }
  // }, [value]);

  // React.useEffect(() => {
  //   !sixth && fifthRef.current.focus();
  // }, [sixth]);

  // React.useEffect(() => {
  //   if (fifth) {
  //     controlFocusNextElem(5);
  //   } else {
  //     fifthRef.current.focus();
  //   }
  // }, [fifth]);

  // React.useEffect(() => {
  //   if (fourth) {
  //     controlFocusNextElem(4);
  //   } else {
  //     fourthRef.current.focus();
  //   }
  // }, [fourth]);

  // React.useEffect(() => {
  //   if (third) {
  //     controlFocusNextElem(3);
  //   } else {
  //     thirdRef.current.focus();
  //   }
  // }, [third]);

  // React.useEffect(() => {
  //   if (second) {
  //     controlFocusNextElem(2);
  //   } else {
  //     secondRef.current.focus();
  //   }
  // }, [second]);

  // React.useEffect(() => {
  //   if (first) {
  //     controlFocusNextElem(1);
  //   } else {
  //     firstRef.current.focus();
  //   }
  // }, [first]);

  // React.useEffect(() => {
  //   firstRef.current.focus();
  // }, []);

  // React.useEffect(() => {
  //   if (first && second && third && fourth && fifth && sixth) {
  //     if (sixth !== '6') {
  //       setSixth('');
  //       setSixthCondition('invalid');
  //     } else {
  //       sixthRef.current.disabled = true;
  //     }

  //     if (fifth !== '5') {
  //       setFifth('');
  //       setFifthCondition('invalid');
  //     } else {
  //       fifthRef.current.disabled = true;
  //     }

  //     if (fourth !== '4') {
  //       setFourth('');
  //       setFourthCondition('invalid');
  //     } else {
  //       fourthRef.current.disabled = true;
  //     }

  //     if (third !== '3') {
  //       setThird('');
  //       setThirdCondition('invalid');
  //     } else {
  //       thirdRef.current.disabled = true;
  //     }

  //     if (second !== '2') {
  //       setSecond('');
  //       setSecondCondition('invalid');
  //     } else {
  //       secondRef.current.disabled = true;
  //     }

  //     if (first !== '1') {
  //       setFirst('');
  //       setFirstCondition('invalid');
  //     } else {
  //       firstRef.current.disabled = true;
  //     }
  //   }
  // }, [first, second, third, fourth, fifth, sixth]);

  // console.log(fifthCondition);
  return (
    <section>
      <form className='form'>
        {[...new Array(6)].map((_, i) => (
          <input
            key={i}
            ref={inputs[i]}
            className={condition[i] === 'invalid' ? 'input invalid' : 'input'}
            type='text'
            value={value[i]}
            maxLength='1'
            onChange={(e) =>
              setValue(
                value.map((item, index) => {
                  if (i === index) {
                    item = e.target.value.replace(/\D/, '');
                  }
                  return item;
                }),
              )
            }
          />
        ))}

        {/* <input
          ref={firstRef}
          className={firstCondition === 'invalid' ? 'input invalid' : 'input'}
          type='text'
          value={first}
          maxLength='1'
          onChange={(e) => setFirst(e.target.value.replace(/\D/, ''))}
        />
        <input
          ref={secondRef}
          className={secondCondition === 'invalid' ? 'input invalid' : 'input'}
          type='text'
          maxLength='1'
          value={second}
          onChange={(e) => setSecond(e.target.value.replace(/\D/, ''))}
        />
        <input
          ref={thirdRef}
          className={thirdCondition === 'invalid' ? 'input invalid' : 'input'}
          type='text'
          maxLength='1'
          value={third}
          onChange={(e) => setThird(e.target.value.replace(/\D/, ''))}
        />
        <input
          ref={fourthRef}
          className={fourthCondition === 'invalid' ? 'input invalid' : 'input'}
          type='text'
          maxLength='1'
          value={fourth}
          onChange={(e) => setFourth(e.target.value.replace(/\D/, ''))}
        />
        <input
          ref={fifthRef}
          className={fifthCondition === 'invalid' ? 'input invalid' : 'input'}
          type='text'
          maxLength='1'
          value={fifth}
          onChange={(e) => setFifth(e.target.value.replace(/\D/, ''))}
        />
        <input
          ref={sixthRef}
          className={sixthCondition === 'invalid' ? 'input invalid' : 'input'}
          type='text'
          value={sixth}
          maxLength='1'
          onChange={(e) => setSixth(e.target.value.replace(/\D/, ''))}
        /> */}
      </form>
    </section>
  );
}
