import config from '@@/app.config.json'
import { renderReactTemplate, renderMjml, exportTemplate, renderJsxTemplate } from '../utils'

import fs from 'fs/promises'

export async function exportAllTemplates() {
    const jsx = []
    const mjml = []
    const react = []

    const matches = import.meta.glob(["/**/*.jsx", "/**/*.mjml"], {
        eager: true
    });

    for (const match in matches) {
        if (match.includes('partial')) {
            continue
        }
        if (match.startsWith(`/${config.js.input}`)) {
            jsx.push({ [match]: matches[match] })
        }
        if (match.startsWith(`/${config.mjml.input}`)) {
            mjml.push({ [match]: matches[match] })
        }
        if (match.startsWith(`/${config.react.input}`)) {
            react.push({ [match]: matches[match] })
        }
    }

    await handleExportReact(react)
    await handleExportJsx(jsx)
    await handleExportMjml(mjml)
}

// helper method
function handleKeyValue(object) {
    return {
        fileName: Object.keys(object)[0].match(/\/src\/templates\/[^/]+\/(.*?)\.[^/]+$/)[1],
        file: Object.values(object)[0]
    }
}


// internal function to render and export templates
async function handleExportJsx(arr) {
    await Promise.all(arr.map(async (entry) => {
        const { fileName, file } = handleKeyValue(entry)
        const template = await renderJsxTemplate(file?.default())
        await exportTemplate({ fileName, type: 'js', content: template })
    }))
}

async function handleExportReact(arr) {
    await Promise.all(arr.map(async (entry) => {
        const { fileName, file } = handleKeyValue(entry)
        const template = await renderReactTemplate(file?.default())
        await exportTemplate({ fileName, type: 'react', content: template })
    }))
}

async function handleExportMjml(arr) {
    await Promise.all(arr.map(async (entry) => {
        const fileName = typeof entry === 'string' ? handleKeyValue({ [entry]: '' }).fileName : handleKeyValue(entry).fileName
        const file = await fs.readFile(`${config.mjml.input}/${fileName}.mjml`, "utf-8");
        const template = renderMjml(file);
        await exportTemplate({ fileName, type: "mjml", content: template });
    }))
}


// export Templates for different type of language
export async function exportAllMjml() {
    const matches = Object.keys(import.meta.glob("/**/*.mjml")).filter(match => !match.includes('partial'));
    await handleExportMjml(matches)
}

export async function exportAllJsx(type) {
    const matches = import.meta.glob(["/**/*.jsx"], {
        eager: true
    })
    let arr = []
    for (const match in matches) {
        if (match.includes('partial')) {
            continue
        }
        if (match.startsWith(`/${config[type].input}`)) {
            arr.push({ [match]: matches[match] })
        }
    }

    switch (type) {
        case 'js':
            return await handleExportJsx(arr)
        case 'react':
            return handleExportReact(arr)
    }

}