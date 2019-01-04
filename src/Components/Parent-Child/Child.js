import React from 'react';

export default props => {
	return <button onClick={() => props.handler('child')}>Click Me</button>;
};
