import React from 'react';
import { CopyrightFooter } from "./CopyrightFooter";
import { storiesOf } from '@storybook/react';

const story = storiesOf('Components/CopyrightFooter', module);

story.add(
    'CopyrightFooter Component',
    () => <CopyrightFooter />
);
