// ---------------------------------------------------------------------------
// DNS Plugin — DNS management and filtering.
// ---------------------------------------------------------------------------

import { definePlugin } from '../../cms/kernel/index.js';
import { Globe } from 'lucide-react';

export default definePlugin({
  id: 'dns_cplug',
  name: 'DNS',
  type: 'core',
  required: true,
  version: '0.4.0',
  description: 'DNS management — record configuration, filtering, and resolution.',
  icon: Globe,
  category: 'Core',
  tags: ['core-required', 'system_cplug', 'networking', 'dns_cplug'],
  requires: ['system_cplug'],

  hooks: {
    hook_entity_info({ registerEntityType }) {
      registerEntityType({
        id: 'dns_record',
        label: 'DNS Record',
        pluginId: 'dns_cplug',
        hasBundles: false,
        baseFields: ['id', 'uuid', 'name', 'type', 'value', 'ttl', 'zone', 'status'],
      });
      return { id: 'dns_record', label: 'DNS Record', pluginId: 'dns_cplug' };
    },

    hook_permission() {
      return [
        { id: 'dns.admin', label: 'Administer DNS', module: 'dns_cplug' },
        { id: 'dns.view', label: 'View DNS records', module: 'dns_cplug' },
      ];
    },
  },
});
