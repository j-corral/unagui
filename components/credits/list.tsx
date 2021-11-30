import React from 'react';
import { v4 as genUUID } from 'uuid';

import { CreditItem, CreditItemProps } from './item';

export interface CreditListProps {
  credits?: Array<CreditItemProps>;
}

export function CreditList(props: CreditListProps) {
  return (
    <>
      {props.credits?.map((item) => {
        return <CreditItem key={genUUID()} {...item} />;
      })}
    </>
  );
}
