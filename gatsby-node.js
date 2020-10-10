exports.createPages = ({ actions }) => {
    const { createRedirect } = actions
  
    createRedirect({
        fromPath: `/Hidden-Acres-RV-Park/OverView`,
        toPath: `/`,
        redirectInBrowser: true,
        isPermanent: true,
    })

    createRedirect({
        fromPath: `/Hidden-Acres-RV-Park/OverView/`,
        toPath: `/`,
        redirectInBrowser: true,
        isPermanent: true,
    })
}