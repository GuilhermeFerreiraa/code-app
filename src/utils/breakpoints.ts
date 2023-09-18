/* eslint-disable import/no-anonymous-default-export */
interface BreakPointTypes {
 xs: string,
 sm: string,
 lg: string,
}

const size: BreakPointTypes = {
 xs: `320px`,
 sm: `768px`,
 lg: `1200px`,
}

const device: BreakPointTypes = {
 xs: `(min-width: ${size.xs})`,
 sm: `(min-width: ${size.sm})`,
 lg: `(min-width: ${size.lg})`
}

export default { size, device }