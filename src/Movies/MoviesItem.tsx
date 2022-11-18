import React, {useState} from 'react';
import type {Types} from '../../type';

interface Props {
  name: Types;
}

 const UserItem: React.FC<Props> = ({name}) => {

  return (
    <div className="card mb-2">
      <div className="row no-gutters">
            <h5 className="card-title">{name.name}</h5>
      </div>
    </div>
  );
};

export default UserItem;