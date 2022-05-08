import EditorJS from '@editorjs/editorjs';
import React, { useEffect } from 'react';

const Editor: React.FC = () => {
	useEffect(() => {
		const editor = new EditorJS({
			holder: 'editor',
		});

		// return () => {
		// 	editor.isReady
		// 		.then(() => editor.destroy())
		// 		.catch((e) => console.log('Error editor cleanup', e));
		// };
	}, []);

	return <div id='editor' />;
};

export { Editor };
