import Counter from "./Counter"
import RepositoryItem from "./RepositoryItem"

const repository = {
  name:'ignite-chapter01',
  description: 'bootcamp rocketseat',
  link: 'https://github.com/sleduardo20/ignite-chapter01'
}

const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>

      <ul>
       <RepositoryItem repository={repository} />
      </ul>
      <Counter />
    </section>
  )
}

export default RepositoryList;