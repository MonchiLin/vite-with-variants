import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

const getAppVariant = async (variant: string) => {
  const defaultVariant = await import(`./variants/[fallback].js`)
  const variantFile = await import(`./variants/${variant}.js`)

  const data = {
    ...defaultVariant.default,
    ...variantFile.default,
    variant,
  }
  return data
}

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const APP_VARIANT = await getAppVariant(process.env.variant)

  return {
    plugins: [react()],
    define: {
      "APP_VARIANT": JSON.stringify(APP_VARIANT),
    },
  }
})
