import Profile from '../Profile/Profile';

const developers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Senior backend developer',
    address: 'Seattle, WA',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'C#'],
  },
  {
    id: 2,
    name: 'Kevin Smith',
    position: 'Junior frontend developer',
    address: 'New York, NY',
    skills: ['HTML', 'SASS', 'TypeScript'],
  },
  {
    id: 3,
    name: 'Bruce Wayne',
    position: 'Frontend developer',
    address: 'New Jearsy, NY',
    skills: ['JavaScript', 'React', 'Angular', 'Express'],
  },
  {
    id: 4,
    name: 'Peter Parker',
    position: 'Fullstack developer',
    address: 'New York, NY',
    skills: ['JavaScript', 'HTML', 'React', 'Express', 'Angular', 'SASS'],
  },
];

export default function Profiles() {
  return (
    <div className='Profiles'>
      {developers.map((developer) => (
        <Profile key={developer.id} {...developer} />
      ))}
    </div>
  );
}
