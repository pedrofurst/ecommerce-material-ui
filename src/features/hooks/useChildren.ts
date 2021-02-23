import React, { ReactElement, useCallback } from 'react';

export type ComponentChildren = ReactElement | boolean;
export type PropsWithComponentChildren<T> = T & {
  children: ComponentChildren | ComponentChildren[];
};
export type ContainerWithId<T> = T & {
  id?: string;
};

export default function useChildren(
  children: ComponentChildren | ComponentChildren[]
) {
  const getChildrenById = useCallback(
    (id: string) =>
      React.Children.map(children, (child) => child).find(
        (child) => child.props.id === id
      ),
    [children]
  );

  return {
    getChildrenById,
  };
}
