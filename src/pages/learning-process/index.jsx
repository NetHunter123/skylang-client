import React from 'react';
import MainLayout from "@/components/layout/MainLayout";

const LearningProcess = () => {
	return (
		<div>
		Learning process
		</div>
	);
};

LearningProcess.getLayout = (page) => (
	<MainLayout>
		{page}
	</MainLayout>
)
export default LearningProcess;
