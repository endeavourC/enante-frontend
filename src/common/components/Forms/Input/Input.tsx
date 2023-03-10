import React, { forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';
import { Label, Message, MessageType } from '@/common/components/Forms';
import { FieldError } from 'react-hook-form';

interface Props {
	label?: string;
	errors?: FieldError | undefined;
}

export const Input: React.FC<
	Props & React.InputHTMLAttributes<HTMLInputElement>
> = forwardRef(
	(
		{ label, errors, ...props },
		ref: LegacyRef<HTMLInputElement> | undefined
	) => {
		const inputClasses = classNames({
			'mt-2': true,
			'border-muted dark:border-white': !errors,
			'border-danger': errors,
		});

		return (
			<div className="flex flex-col w-full my-3">
				{label && <Label errors={errors} label={label} />}
				<input ref={ref} className={inputClasses} {...props} />
				{errors && (
					<Message type={MessageType.Danger} message={errors?.message} />
				)}
			</div>
		);
	}
);
