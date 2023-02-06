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

  const inputsRef = [
    firstRef,
    secondRef,
    thirdRef,
    fourthRef,
    fifthRef,
    sixthRef,
  ];

  // если следующий инпут не заблокирован, то фокус на него,
  //иначе проверяем следующий
  function controlFocusNextElem(n) {
    for (let i = n; i < inputsRef.length; i++) {
      if (!inputsRef[i].current?.disabled) {
        inputsRef[i].current?.focus();
        break;
      }
    }
  }

  // при нажатии Backspace, если предыдущий элемент не заблокирован,
  // то фокус на него, иначе проверяем следующий

  const handleBackSpace = (e) => {
    if (e.key === 'Backspace') {
      for (let i = inputsRef.length; i > 0; i--) {
        if (
          inputsRef[i - 1].current?.value &&
          !inputsRef[i - 1].current?.disabled
        ) {
          inputsRef[i - 1].current?.focus();
          break;
        }
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleBackSpace);
    return () => {
      document.removeEventListener('keydown', handleBackSpace);
    };
  });

  // если инпут пустой(после очистки при валидации), то фокус на него
  // если инпут стал со значением, то фокус на следующий элемент
  const setFocus = (n) => {
    if (value[n - 1]) {
      controlFocusNextElem(n);
    } else {
      inputsRef[n - 1].current.focus();
    }
  };

  // следим за изменением инпутов
  React.useEffect(() => {
    setFocus(6);
  }, [value[5]]);

  React.useEffect(() => {
    setFocus(5);
  }, [value[4]]);

  React.useEffect(() => {
    setFocus(4);
  }, [value[3]]);

  React.useEffect(() => {
    setFocus(3);
  }, [value[2]]);

  React.useEffect(() => {
    setFocus(2);
  }, [value[1]]);

  React.useEffect(() => {
    setFocus(1);
  }, [value[0]]);

  React.useEffect(() => {
    firstRef.current.focus();
  }, []);

  // валидация при заполнении всех инпутов
  React.useEffect(() => {
    if (value.every((item) => item)) {
      const tempArrValue = [];
      const tempArrCondition = [];

      value.forEach((item, i) => {
        if (item !== `${i + 1}`) {
          tempArrValue.push('');
          tempArrCondition.push('invalid');
        } else {
          tempArrValue.push(item);
          tempArrCondition.push('');
          inputsRef[i].current.disabled = true;
        }
      });

      if (tempArrCondition.every((item) => item === '')) return;

      setValue(tempArrValue);
      setCondition(tempArrCondition);
    }
  }, [value]);

  return (
    <section>
      <form className='form'>
        {[...new Array(6)].map((_, i) => (
          <input
            key={i}
            ref={inputsRef[i]}
            className={condition[i] === 'invalid' ? 'input invalid' : 'input'}
            type='text'
            value={value[i]}
            maxLength='1'
            onChange={(e) =>
              setValue(
                value.map((item, index) => {
                  if (index === i) {
                    item = e.target.value.replace(/\D/, '');
                  }
                  return item;
                }),
              )
            }
          />
        ))}
      </form>
    </section>
  );
}
