import { Loader } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'


export const LoadingEffect = () => {
    return (
        <Layout title="Cargando...">
          <div className="w-full h-80 flex items-center justify-center">
            <Loader active inline="centered" />
          </div>
        </Layout>
      )
}