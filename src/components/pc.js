const pc = (ctx) => {
  const _init = (id) => {
    console.log('name', id)
  }
  console.log('ctx', ctx)
  _init(ctx.params.campaign)
}

export default pc