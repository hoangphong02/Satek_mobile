import { AvGroup } from 'availity-reactstrap-validation';
import React from 'react';
import { Input, Label } from 'reactstrap';

import { translate } from '~/helpers/utils';

const UploadFileCustom = ({
  title = translate('common.avatar'),
  fileUpload,
  avatarInputRef,
  handleUpload,
  handleRemove,
  imagePreview,
}) => (
  <div className="d-flex parent-image flex-column">
    <Label>
      {title}
    </Label>
    <AvGroup className="w-30 ">
      <Label for="exampleCustomFileBrowser1" className="label-custom">
        {translate('common.select')}
      </Label>
      <Input
        name="avatar"
        type="text"
        value={fileUpload}
        ref={avatarInputRef}
        style={{ display: 'none' }}
      />
      <Input
        type="file"
        id="exampleCustomFileBrowser1"
        name="avatar"
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
    </AvGroup>
    {imagePreview && (
      <div className="image-preview">
        <img
          src={imagePreview}
          alt=""
        />
        <div
          className="image-preview-remove"
          onClick={handleRemove}
        >
          x
        </div>
      </div>
    )}
  </div>
);

export default UploadFileCustom;
