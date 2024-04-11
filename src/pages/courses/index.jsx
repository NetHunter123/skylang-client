import React from 'react';
import MainLayout from "@/components/layout/MainLayout";

const Courses = () => {
	return (
		<div>
			Courses
		</div>
	);
};

Courses.getLayout = (page) => (
	<MainLayout>
		{page}
	</MainLayout>
)

export default Courses;
