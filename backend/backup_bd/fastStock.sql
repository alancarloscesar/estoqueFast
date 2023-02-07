PGDMP                         {         	   fastStock    14.5    14.5 /    ,           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            -           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            .           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            /           1262    40960 	   fastStock    DATABASE     k   CREATE DATABASE "fastStock" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE "fastStock";
                postgres    false            �            1259    77293    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �            1259    77321 
   categories    TABLE     �   CREATE TABLE public.categories (
    name text NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    id integer NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    77369    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    212            0           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    215            �            1259    77312    products    TABLE     j  CREATE TABLE public.products (
    name text NOT NULL,
    color text DEFAULT 'Sem cor'::text NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    id integer NOT NULL,
    category_id integer NOT NULL,
    size_id integer NOT NULL,
    stock boolean DEFAULT false NOT NULL,
    measure text NOT NULL,
    amount numeric(9,2)
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    77379    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    211            1           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    216            �            1259    77339    salesNow    TABLE       CREATE TABLE public."salesNow" (
    date_sale timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    amount numeric(9,2) NOT NULL,
    price numeric(9,2) NOT NULL,
    id integer NOT NULL,
    product_id integer NOT NULL,
    size_id integer NOT NULL
);
    DROP TABLE public."salesNow";
       public         heap    postgres    false            �            1259    77389    salesNow_id_seq    SEQUENCE     �   CREATE SEQUENCE public."salesNow_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."salesNow_id_seq";
       public          postgres    false    214            2           0    0    salesNow_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."salesNow_id_seq" OWNED BY public."salesNow".id;
          public          postgres    false    217            �            1259    77330    sizes    TABLE     �   CREATE TABLE public.sizes (
    name text NOT NULL,
    price numeric(9,2) NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    id integer NOT NULL,
    category_id integer NOT NULL
);
    DROP TABLE public.sizes;
       public         heap    postgres    false            �            1259    77397    sizes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sizes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.sizes_id_seq;
       public          postgres    false    213            3           0    0    sizes_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.sizes_id_seq OWNED BY public.sizes.id;
          public          postgres    false    218            �            1259    77302    users    TABLE     �   CREATE TABLE public.users (
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    access text DEFAULT 'admin'::text NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP,
    id integer NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    77407    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    210            4           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    219            ~           2604    77370    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    212            z           2604    77380    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    211            �           2604    77390    salesNow id    DEFAULT     n   ALTER TABLE ONLY public."salesNow" ALTER COLUMN id SET DEFAULT nextval('public."salesNow_id_seq"'::regclass);
 <   ALTER TABLE public."salesNow" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    214            �           2604    77398    sizes id    DEFAULT     d   ALTER TABLE ONLY public.sizes ALTER COLUMN id SET DEFAULT nextval('public.sizes_id_seq'::regclass);
 7   ALTER TABLE public.sizes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    213            x           2604    77408    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    210                      0    77293    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    209   B7       "          0    77321 
   categories 
   TABLE DATA           :   COPY public.categories (name, created_at, id) FROM stdin;
    public          postgres    false    212   ;       !          0    77312    products 
   TABLE DATA           m   COPY public.products (name, color, created_at, id, category_id, size_id, stock, measure, amount) FROM stdin;
    public          postgres    false    211   �;       $          0    77339    salesNow 
   TABLE DATA           W   COPY public."salesNow" (date_sale, amount, price, id, product_id, size_id) FROM stdin;
    public          postgres    false    214   �<       #          0    77330    sizes 
   TABLE DATA           I   COPY public.sizes (name, price, created_at, id, category_id) FROM stdin;
    public          postgres    false    213   �<                  0    77302    users 
   TABLE DATA           N   COPY public.users (name, email, password, access, created_at, id) FROM stdin;
    public          postgres    false    210   �<       5           0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 3, true);
          public          postgres    false    215            6           0    0    products_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.products_id_seq', 8, true);
          public          postgres    false    216            7           0    0    salesNow_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."salesNow_id_seq"', 1, false);
          public          postgres    false    217            8           0    0    sizes_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.sizes_id_seq', 1, true);
          public          postgres    false    218            9           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    219            �           2606    77301 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    209            �           2606    77372    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    212            �           2606    77382    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    211            �           2606    77392    salesNow salesNow_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."salesNow"
    ADD CONSTRAINT "salesNow_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."salesNow" DROP CONSTRAINT "salesNow_pkey";
       public            postgres    false    214            �           2606    77400    sizes sizes_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.sizes
    ADD CONSTRAINT sizes_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.sizes DROP CONSTRAINT sizes_pkey;
       public            postgres    false    213            �           2606    77410    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            �           2606    77417 "   products products_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public.products DROP CONSTRAINT products_category_id_fkey;
       public          postgres    false    3210    211    212            �           2606    77422    products products_size_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_size_id_fkey FOREIGN KEY (size_id) REFERENCES public.sizes(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 H   ALTER TABLE ONLY public.products DROP CONSTRAINT products_size_id_fkey;
       public          postgres    false    213    3212    211            �           2606    77432 !   salesNow salesNow_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."salesNow"
    ADD CONSTRAINT "salesNow_product_id_fkey" FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 O   ALTER TABLE ONLY public."salesNow" DROP CONSTRAINT "salesNow_product_id_fkey";
       public          postgres    false    3208    211    214            �           2606    77445    salesNow salesNow_size_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."salesNow"
    ADD CONSTRAINT "salesNow_size_id_fkey" FOREIGN KEY (size_id) REFERENCES public.sizes(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public."salesNow" DROP CONSTRAINT "salesNow_size_id_fkey";
       public          postgres    false    213    214    3212            �           2606    77427    sizes sizes_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sizes
    ADD CONSTRAINT sizes_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 F   ALTER TABLE ONLY public.sizes DROP CONSTRAINT sizes_category_id_fkey;
       public          postgres    false    212    3210    213               �  x���]�7��������>DN``A6�/I` ���Rv�`�(4���*�N��kĶ˚�kN�	���F��⪵V�3[�CS�V�Ly��U���ӗ�tq㐹��7!�!�I�#�G��̇]��_��c��������Ͽ}����3�|}�/_?�/�O?�ߏV����\�����m��z�\��2d�U�~  ��"����}���G�^�4�,���GH���ڒ�&����0	{<dz���/H'Vui����;���F����m̚E�-ym󝹜�Բ��l���Y�:k�q>�-�1O�y�"T�3�&�#�w������S�l��\' iK���Km��&}W�J����'P}e4,k����y����ְ��9��x��`�A<l��Dn�I����Z�i5t`\�V�H�5r�JQ4�AW�n�;D��޾���m*ls%ܳ!�Fr2N�ytL�-<g^�!�* �Y�EPH2��ݽ<xR� Am���n��$Ȯ�j� 5g͛Y��s��3�[�܄b�%��8�=�i���T��s���jx��l�CH
	G�"
�}���]�qMF�Il-i�Λ��+�j��]�4�����W/ֱ���S:�`(����t�D�o��Ȉ��:l���ctؗ�#m]�ǁdtՐ�(�`��k�M����%�̣�g�8P���}x *P	�qRf�	��$��W$%�Έay��N��S��t�R^W����8�.��lGbn�m�CC�9;�/���s�I�م˩�ѥ%���Se�x����A���,��k�j�J������k�֯�ڳ#��79S�T!�+E`E��8b7��&��p��� C!B�p��������;?�w�0�����q���_���z�7z�`qD
?��]\M'������Qi�ZU��9�tڊ4��/ѵ�`"��o��ph�O�׵��k�>}xzz��AL�      "   d   x�NL��I,VK�JLI,�4202�50"C+K+C=s3cNC���������/�G�2V04�22�2��3�4�4�
��������H��̜Ә+F��� �(      !   �   x�}�AN�0����@G�؎��"�
Vl�6E�ҤJ�����b�RTɕ���{��O�g�˼\���/or Nr�i��'��3a@�� w`9r��a�ց�ۺ�v����*XpA$�q�4a������~'����������(���O����X�2D��m�H���w�!5�?g�.4�!tU'�PJ:B�՞���byɑ4����ya�h\I�\��R6�B�6�`��&I�n}�      $      x������ � �      #   0   x��N�41�30�4202�50"C+C#+=KKNCNC�=... ��Z          y   x�s�I��L)�ez����*F�**�yz�A�&y�AiQ�Q�I�>�F���e�eQ�Qn&�)��΁����)�)�yA�F���)��y�FFƺF@�``he`aeb�gid�i����� 8 �     