import React from 'react';
import {useForm} from '@mantine/form';
import {Box, Button, Checkbox, Group, TextInput} from "@mantine/core";

const TakeLessonForm = () => {
	const form = useForm({
		mode: 'uncontrolled',
		initialValues: {
			name: '',
			email: '',
			// termsOfService: false,
		},
		
		validate: {
			name: (value) => (value?.length >= 1 ? null : 'Invalid name'),
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	});
	return (
		<Box maw={340} mx="auto">
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<TextInput
					withAsterisk
					label="Name"
					placeholder="Your Name"
					{...form.getInputProps('name')}
				/>
				
				<TextInput
					withAsterisk
					label="Email"
					placeholder="your@email.com"
					{...form.getInputProps('email')}
				/>
				
				
				{/*<Checkbox*/}
				{/*	mt="md"*/}
				{/*	label="I agree to sell my privacy"*/}
				{/*	{...form.getInputProps('termsOfService', {type: 'checkbox'})}*/}
				{/*/>*/}
				
				<Group justify="flex-end" mt="md">
					<Button type="submit">Submit</Button>
				</Group>
			</form>
		</Box>
	);
};

export default TakeLessonForm;
