import React, { useRef } from 'react';

import { useDrag, useDrop } from 'react-dnd';

import { Container, Label } from './styles';

export default function Card({ card }) {
  const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', id: card.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      console.log(item.id);
      console.log(card.id);
    },
  });

  dragRef(dropRef(ref));


  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {card.labels.map((label) => <Label key={label} color={label} />)}
      </header>
      <p>{card.content}</p>
      {card.user && <img src={card.user} alt="avatar" />}

    </Container>
  );
}
