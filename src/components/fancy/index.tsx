import * as React from 'react'; 
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { IFancyProps } from '../../types/types';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Fancybox(props: IFancyProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return <div id='portal' style={{display: 'flex'}} ref={containerRef}>{props.children}</div>;
}

export default Fancybox;