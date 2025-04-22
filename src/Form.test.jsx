import { describe, expect, it } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Form from './Form';
import { OperandContext } from './context/OperandContext';

describe('Form', () => {
  it('disables button when operand contains no value', async () => {
    const operand = 0;
    const user = userEvent.setup();
    render(
      <OperandContext.Provider value={{ operand }}>
        <Form />
      </OperandContext.Provider>
    );
    const input = screen.getByRole('spinbutton');
    await user.click(input);
    await user.type(input, '{backspace}');

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
