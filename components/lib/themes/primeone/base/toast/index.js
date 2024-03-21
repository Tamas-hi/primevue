export default {
    css: ({ dt }) => `
.p-toast {
    width: 25rem;
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    backdrop-filter: blur(${dt('toast.blur')});
    margin: 0 0 1rem 0;
    border-radius: ${dt('rounded.base')};
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: 1.125rem;
    width: 1.125rem;
    height: 1.125rem;
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: 0.75rem;
    gap: 0.5rem;
}

.p-toast-message-text {
    flex: 1 1 auto;
}

.p-toast-summary {
    font-weight: 500;
}
.p-toast-detail {
    margin-top: 0.5rem;
    font-size: 0.875rem;
}

.p-toast-icon-close {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
    color: inherit;
    width: 1.75rem;
    height: 1.75rem;
    margin-top: -25%;
    right: -25%;
}

.p-toast-icon-close:focus-visible {
    outline-width: ${dt('focus.ring.width')};
    outline-style: ${dt('focus.ring.style')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-toast-message-info {
    background: ${dt('toast.info.background')};
    border: 1px solid ${dt('toast.info.border.color')};
    color: ${dt('toast.info.color')};
    box-shadow: ${dt('toast.info.box.shadow')};
}

.p-toast-message-info .p-toast-detail {
    color: ${dt('toast.info.detail.color')};
}

.p-toast-message-info .p-toast-icon-close:focus-visible {
    color: ${dt('toast.info.color')};
}

.p-toast-message-info .p-toast-icon-close:hover {
    background: ${dt('toast.info.close.hover.background')};
}

.p-toast-message-success {
    background: ${dt('toast.success.background')};
    border: 1px solid ${dt('toast.success.border.color')};
    color: ${dt('toast.success.color')};
    box-shadow: ${dt('toast.success.box.shadow')};
}

.p-toast-message-success .p-toast-detail {
    color: ${dt('toast.success.detail.color')};
}

.p-toast-message-success .p-toast-icon-close:focus-visible {
    color: ${dt('toast.success.color')};
}

.p-toast-message-success .p-toast-icon-close:hover {
    background: ${dt('toast.success.close.hover.background')};
}

.p-toast-message-warn {
    background: ${dt('toast.warn.background')};
    border: 1px solid ${dt('toast.warn.border.color')};
    color: ${dt('toast.warn.color')};
    box-shadow: ${dt('toast.warn.box.shadow')};
}

.p-toast-message-warn .p-toast-detail {
    color: ${dt('toast.warn.detail.color')};
}

.p-toast-message-warn .p-toast-icon-close:focus-visible {
    color: ${dt('toast.warn.color')};
}

.p-toast-message-warn .p-toast-icon-close:hover {
    background: ${dt('toast.warn.close.hover.background')};
}

.p-toast-message-error {
    background: ${dt('toast.error.background')};
    border: 1px solid ${dt('toast.error.border.color')};
    color: ${dt('toast.error.color')};
    box-shadow: ${dt('toast.error.box.shadow')};
}

.p-toast-message-error .p-toast-detail {
    color: ${dt('toast.error.detail.color')};
}

.p-toast-message-error .p-toast-icon-close:focus-visible {
    color: ${dt('toast.error.color')};
}

.p-toast-message-error .p-toast-icon-close:hover {
    background: ${dt('toast.error.close.hover.background')};
}

.p-toast-message-secondary {
    background: ${dt('toast.secondary.background')};
    border: 1px solid ${dt('toast.secondary.border.color')};
    color: ${dt('toast.secondary.color')};
    box-shadow: ${dt('toast.secondary.box.shadow')};
}

.p-toast-message-secondary .p-toast-detail {
    color: ${dt('toast.secondary.detail.color')};
}

.p-toast-message-secondary .p-toast-icon-close:focus-visible {
    color: ${dt('toast.secondary.color')};
}

.p-toast-message-secondary .p-toast-icon-close:hover {
    background: ${dt('toast.secondary.close.hover.background')};
}

.p-toast-message-contrast {
    background: ${dt('toast.contrast.background')};
    border: 1px solid ${dt('toast.contrast.border.color')};
    color: ${dt('toast.contrast.color')};
    box-shadow: ${dt('toast.contrast.box.shadow')};
}

.p-toast-message-contrast .p-toast-detail {
    color: ${dt('toast.contrast.detail.color')};
}

.p-toast-message-contrast .p-toast-icon-close:focus-visible {
    color: ${dt('toast.contrast.color')};
}

.p-toast-message-contrast .p-toast-icon-close:hover {
    background: ${dt('toast.contrast.close.hover.background')};
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`
};