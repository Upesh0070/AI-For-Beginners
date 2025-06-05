import { shallowMount } from '@vue/test-utils';
import NotFound from '@/views/NotFound.vue';

describe('NotFound view', () => {
  it('renders error message', () => {
    const wrapper = shallowMount(NotFound);
    expect(wrapper.text()).toContain('Sorry, wrong number!');
  });
});
