import React, { useState, useEffect } from 'react';

import Toast from './Toast';


const camelCase = (str:string) => str.replace(/-([a-z])/g, (g) => g[ 1 ].toUpperCase());

const defaultToasts:{[key:string]: any[]} = {
  topLeft: [],
  topCenter: [],
  topRight: [],
  bottomLeft: [],
  bottomCenter: [],
  bottomRight: []
};

/* type CToastItem = {
  id: number;
  text: string;
  type: string;
  hideAfter: number;
  onClick: any;
};

type CToastContainerProps = Partial<{
  toast: {
    position?: string;
  };
  hiddenID: number;
}>;
 */
const ToastContainer = ({ toast, hiddenID }:Props) => {
  const [ allToasts, setToasts ] = useState(defaultToasts);

  useEffect(() => {
    if (toast) {
      setToasts((prevToasts) => {
        const position = camelCase(toast.position || 'top-center');

        return { ...prevToasts, [ position ]: [ ...prevToasts[ position ], toast ] };
      });
    }
  }, [ toast ]);


  const handleRemove = (id?:string | number, position?: string) => {
    setToasts((prevToasts) => {
      const toastPosition = camelCase(position || 'top-center');

      return {
        ...prevToasts,
        [ toastPosition ]: prevToasts[ toastPosition ].filter((item) => item.id !== id)
      };
    });
  };

  const rows = [ 'top', 'bottom' ];
  const groups = [ 'Left', 'Center', 'Right' ];

  return (
    <>
      {
        rows.map((row) => (
          <div key={`row_${row}`}
            className="ct-row"
          >
            {
              groups.map((group) => {
                const type = `${row}${group}`;
                const className = [ 'ct-group', row === 'bottom' ? 'ct-flex-bottom' : '' ].join(' ');

                return (
                  <div key={type}
                    className={className}
                  >
                    {
                      allToasts[ type ].map((item) => (
                        <Toast
                          key={`${type}_${item.id}`}
                          {...item}
                          id={item.id}
                          title={item.title}
                          subText={item.subText}
                          type={item.type}
                          onClick={item.onClick}
                          hideAfter={item.hideAfter}
                          show={hiddenID !== item.id}
                          onHide={handleRemove}
                        />
                      ))
                    }
                  </div>
                );
              })
            }
          </div>
        ))
      }
    </>
  );
};


type Props = {
  toast: any;
  hiddenID: number;
};

ToastContainer.defaultProps = {
  toast: undefined,
  hiddenID: undefined
};

export default ToastContainer;
