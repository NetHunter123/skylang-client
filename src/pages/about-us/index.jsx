import React from 'react';
import MainLayout from "@/components/layout/MainLayout";

const AboutUs = () => {
	return (
		<div>
		About us
		</div>
	);
};

AboutUs.getLayout = (page) => (
	<MainLayout>
		{page}
	</MainLayout>
)

export default AboutUs;
