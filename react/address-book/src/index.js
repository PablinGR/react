import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/*import React from 'react'; //importanto dependencia

import ReactDOM from 'react-dom';

const MiPrimerComponente = ()=>(
	// React.createElement('div', { className: 'text-center' },'Hola Mundo')// compnente, props, hijos// abajo en jsx
	 <div className="text-center">
		 Hola Pablin
	 </div>
);



ReactDOM.render(
	//React.createElement(MiPrimerComponente,null,null),
	//document.getElementById('root')// en root del indext.html //abajo pasado en jsx
	<MiPrimerComponente/>,
	document.getElementById('root')
);*/