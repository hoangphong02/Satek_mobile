/* eslint-disable valid-typeof */
/* eslint-disable prefer-const */
/* eslint-disable react/no-this-in-sfc */
import { useEffect, useState } from 'react';
import { defaultLocale } from '~/constants/defaultValues';
import { getCurrentLanguage } from '~/helpers/utils';

const Editor = ({
  id = '',
  name = '',
  value = '',
  onChange = () => {},
  type = '',
}) => {
  id = `editor_${id}`;
  name = `editor_${name}`;
  let language = getCurrentLanguage() !== defaultLocale ? 'en' : 'vi';

  const [content, setContent] = useState(value);
  const [editor, setEditor] = useState();

  useEffect(() => {
    const ckEditor = window.CKEDITOR.replace(id, {
      language,
      toolbar: [
        {
          items:
            type === 'details'
              ? []
              : [
                'PasteText',
                'PasteFromWord',
                'Paste',
                'Undo',
                'Redo',
                '-',
                'Bold',
                'Italic',
                'Underline',
                'Strike',
                '-',
                'TextColor',
                'Font',
                'FontSize',
                'JustifyLeft',
                'JustifyCenter',
                'JustifyRight',
                'NumberedList',
                'BulletedList',
                'Outdent',
                'Indent',
                '-',
                // 'Image',
                'Table',
                'Link',
                'Unlink',
                'Smiley',
                'SpecialChar',
                'RemoveFormat',
              ],
        },
      ],
      readOnly: type === 'details',
    });

    if (ckEditor) {
      ckEditor.on('change', () => {
        const contentTmp = ckEditor.getData();
        setContent(contentTmp);
        onChange(contentTmp);
      });

      setEditor(ckEditor);
    }

    return () => {
      ckEditor?.destroy();
    };
  }, []);

  useEffect(() => {
    if (editor && value !== content) {
      editor.setData(value);
      setContent(value);
    }
  }, [value]);

  return <textarea id={id} name={name} defaultValue={value} />;
};

export default Editor;
