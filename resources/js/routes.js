import AllCandidates from './components/AllCandidates.vue';
import AddCandidate from './components/AddCandidate.vue';
import EditCandidate  from './components/EditCandidate.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllCandidates
    },
    {
        name: 'add',
        path: '/add',
        component: AddCandidate
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditCandidate
    }
];