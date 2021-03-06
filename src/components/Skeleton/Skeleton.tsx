import React from 'react';
import { SkeletonParagraph } from './Paragraph';
import { SkeletonTitle } from './Title';
import { SkeletonPicture } from './Picture';
import { UUI } from '../../core/uui';


export interface BaseSkeletonProps {
  children?: React.ReactNode | string;
}

export const _Skeleton = UUI.FunctionComponent({
  name: 'Skeleton',
  nodes: {
    Root: 'div'
  }
}, (props: BaseSkeletonProps, nodes) => {
  const { Root } = nodes
  return (
    <Root>{props.children}</Root>
  )
})

const Skeleton = _Skeleton as typeof _Skeleton & {
  Paragraph: typeof SkeletonParagraph;
  Title: typeof SkeletonTitle;
  Picture: typeof SkeletonPicture;
}
Skeleton.Paragraph = SkeletonParagraph
Skeleton.Title = SkeletonTitle
Skeleton.Picture = SkeletonPicture

export { Skeleton }

