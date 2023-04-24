// assets
import { IconUserCircle, IconBriefcase, IconBoxMultiple } from '@tabler/icons';

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'candidates',
            title: 'Candidates',
            type: 'item',
            url: '/candidates',
            icon: IconUserCircle,
            breadcrumbs: false
        },
        {
            id: 'category',
            title: 'Category',
            type: 'item',
            url: '/category',
            icon: IconBoxMultiple,
            breadcrumbs: false
        },
        {
            id: 'jobs',
            title: 'Jobs',
            type: 'item',
            url: '/jobs ',
            icon: IconBriefcase,
            breadcrumbs: false
        }
    ]
};

export default other;
